import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import TextField from "@material-ui/core/TextField"
import AssignmentIcon from "@material-ui/icons/Assignment"
import PhoneIcon from "@material-ui/icons/Phone"
import React, { useEffect, useRef, useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import Peer from "simple-peer"
import io from "socket.io-client"


const socket = io.connect('http://localhost:5000')
function DoctorAdvice() {
    const [me, setMe] = useState(null)
    const [stream, setStream] = useState()
    const [receivingCall, setReceivingCall] = useState(false)
    const [caller, setCaller] = useState("")
    const [callerSignal, setCallerSignal] = useState()
    const [callAccepted, setCallAccepted] = useState(false)
    const [idToCall, setIdToCall] = useState("")
    const [callEnded, setCallEnded] = useState(false)
    const [name, setName] = useState("")

    const myVideo = useRef()
    const userVideo = useRef()
    const connectionRef = useRef()



    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
            setStream(stream)
            myVideo.current.srcObject = stream
        })

        socket.on("me", (id) => {
            setMe(id);
         const getUserInfo=localStorage.getItem('mediExpressUser');
          const parsedGetUserInfo=JSON.parse(getUserInfo);

          const url = 'http://localhost:8080/setId';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email:parsedGetUserInfo.Email,callerId:id})
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          alert("ID Updated");
        }
        else {
          alert("Error");
        }

      })
            // setMe(id);
        })

        socket.on("callUser", (data) => {
            setReceivingCall(true)
            setCaller(data.from)
            setName(data.name)
            setCallerSignal(data.signal)
        })
        
    }, [])

    const callUser = (id) => {
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream: stream
        })
        peer.on("signal", (data) => {
            socket.emit("callUser", {
                userToCall: id,
                signalData: data,
                from: me,
                name: name
            })
        })
        peer.on("stream", (stream) => {

            userVideo.current.srcObject = stream

        })
        socket.on("callAccepted", (signal) => {
            setCallAccepted(true)
            peer.signal(signal)
        })

        connectionRef.current = peer
    }

    const answerCall = () => {
        setCallAccepted(true)
        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream: stream
        })
        peer.on("signal", (data) => {
            socket.emit("answerCall", { signal: data, to: caller })
        })
        peer.on("stream", (stream) => {
            userVideo.current.srcObject = stream
        })

        peer.signal(callerSignal)
        connectionRef.current = peer
    }

    const leaveCall = (data) => {
        setCallEnded(true)
        connectionRef.current.destroy()
        console.log(data);
        document.getElementById('textId').value = '';
    }

    return (
        <>
            <h2 className="text-center text-primary ">Video Calling</h2>
            <div className="container">
                <div class="video-container row justify-content-evenly">
                    <div class="video col-lg-4">
                        {stream && <video playsInline muted ref={myVideo} autoPlay style={{ width: "350px" }} />}

                    </div>
                    {callAccepted && !callEnded ? <div class="video col-lg-4">
                        {callAccepted && !callEnded ?
                            <video playsInline ref={userVideo} autoPlay style={{ width: "350px" }} /> :
                            null}

                    </div> : ''}
                </div>

            </div>
            <div class="myId d-flex justify-content-center align-items-center  gap-4">
                <div className="">
                    <h2 className="mt-3">Account Info</h2>
                    <div>
                        <TextField
                            id="filled-basic"
                            label="Name"
                            variant="filled"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{ marginBottom: "20px" }}
                        />
                    </div>

                    <CopyToClipboard text={me} style={{ marginBottom: "2rem" }}>
                        <Button variant="contained" color="primary" startIcon={<AssignmentIcon fontSize="large" />}>
                            Copy Your ID
                        </Button>
                    </CopyToClipboard>
                </div>

                <div className="">
                    <h2>Make a Call</h2>
                    <div>
                        <TextField
                            id="textId"
                            label="ID to call"
                            variant="filled"
                            value={idToCall}
                            onChange={(e) => setIdToCall(e.target.value)}
                            style={{ marginBottom: "20px" }}
                        />
                    </div>
                    <div className="call-button">
                        {callAccepted && !callEnded ? (
                            <Button variant="contained" color="secondary" onClick={() => leaveCall(idToCall)}>
                                End Call
                            </Button>
                        ) : (
                            <IconButton color="primary" aria-label="call" onClick={() => callUser(idToCall)}>
                                <PhoneIcon fontSize="large" />
                            </IconButton>
                        )}
                        
                    </div>
                    
                </div>
                

            </div>
            <div>
                        {receivingCall && !callAccepted ? (
                            <div className="caller">
                                <h1 >{name} is calling...</h1>
                                <Button variant="contained" color="primary" onClick={answerCall}>
                                    Answer
                                </Button>
                            </div>
                        ) : null}
                    </div>
        </>
    )
}

export default DoctorAdvice;