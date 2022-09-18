const posts =[
    {title: "Post One", body: "This is post one"},
    {title: "Post Two", body: "This is post two"}
];

function getPosts(){
    setTimeout( () => {
        let output = '';
        posts.forEach((post, index)=>{
         output+= post.title +" ";
        });
        console.log("Output: " + output);
    }, 1000);
}



function createPost(post, callback){
    setTimeout(()=> {
posts.push(post);
callback();
    }, 2000)
}

createPost({title: 'Post Three', body: 'This is a post three'}, getPosts);

