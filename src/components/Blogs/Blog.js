import React from 'react';

const Blog = ({blog}) => {
    const {id,name,title,text,img} = blog;
    return (
        <div class="card mb-3 mx-2" style={{"maxWidth": "540px"}}>
  <div class="row m-4">
    <div class="col-md-4 tcard">
      <img src={img} class="img-fluid rounded-start" alt="..."/>
      <h2>{name}</h2>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{text}</p>
        
      </div>
    </div>
  </div>
</div>
    );
};

export default Blog;