import React from 'react';
import Blog from './Blog';
import dr1 from '../../Images/Doctor Shows Ok Gesture Pop Art Vector.jpg'
import dr2 from '../../Images/OQ6UTW0.jpg'
import dr3 from '../../Images/doctor vector illustration.jpg'

const Blogs = () => {
    const blogs = [
        {
            "id": 1,
            "name": "Dr. Shakib",
            "title": "If Someone is Having a Stroke: 3 Things To Do and 3 Things Not To Do",
            "text": "When a person is having a stroke, every second counts. And what you do in those critical moments can potentially help save someone’s life. Call 911 immediately. Note the time you first see symptoms. Perform CPR, if necessary. Perform CPR, if necessary",
            "img": dr1
        },
        {
            "id": 2,
            "name": "Dr. Tamim",
            "title": "If Someone is Having a Stroke: 3 Things To Do and 3 Things Not To Do",
            "text": "When a person is having a stroke, every second counts. And what you do in those critical moments can potentially help save someone’s life. Call 911 immediately. Note the time you first see symptoms. Perform CPR, if necessary. Perform CPR, if necessary",
            "img": dr2
        },
        {
            "id": 3,
            "name": "Dr. Miraz",
            "title": "If Someone is Having a Stroke: 3 Things To Do and 3 Things Not To Do",
            "text": "When a person is having a stroke, every second counts. And what you do in those critical moments can potentially help save someone’s life. Call 911 immediately. Note the time you first see symptoms. Perform CPR, if necessary. Perform CPR, if necessary",
            "img": dr3
        }
    ]
    return (
        <div>
            <h3 className='text-center text-primary'>Our Blogs</h3>
            <h2 className='text-center'>Learn from Our Blog</h2>
            <div class="d-flex flex-col m-4">
            {
                blogs.map(blog => <Blog
                key={blog.id}
                blog={blog}
                ></Blog>)
            }
            </div>
        </div>
    );
};

export default Blogs;