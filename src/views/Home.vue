<template>
  <div>
    <div class="header">

   <h1>Recent Posts</h1>

    </div>
 


<!--------------------
<Blog  v-for="post in posts" :key="post.id" :id="post.id" :post="post"/>
------>





<div class="content">
    <div class="posts" v-for="post in posts" :key="post.id" :id="post.id" :post="post">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
      <router-link :to="'Post/' + post.id">
      <button > Read More</button>
      </router-link>
      
    </div>
   
</div>
     
     
     
  </div>
</template>

<script>

import Blog from '../components/Blog.vue';

import axios from 'axios'




export default {

  components: {
    Blog,

 
    
  },
  data() {
    return {
      posts:[],
      photos:[],
    }
  },
  async created() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=50')
      this.posts = response.data
    }
    catch(err) {
      console.log(err);
    }
    },
      methods: {
        async getPost(id){
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            this.posts = response.data
        },
        
    },
    mounted() {
        this.getPost(this.$route.params.id);
    }
}
</script>

<style scoped>
h1, h3{
  text-align:center;
}
.header{
  margin:-2%;
  height:auto;
  background: steelblue;
  color:white
}
.header h1{
  padding-top:2%;
  padding-bottom: 2%;
}
button{
  background:whitesmoke;
  color:black;
  margin-bottom:10%;
  width:50%;
  font-size: 18px;;
  border:2px solid steelblue;  
}
.content{
  width:100%;
  padding-left:5%;
  padding-top:1%;
  display:flex;
  flex-wrap: wrap;
 
}
.posts{
  width:25%;
  height:AUTO;
  margin:1%;
  margin-left:2%;
  margin-top:3%;

  border:2px solid steelblue;
}
.posts h3{
  white-space: nowrap; 
  width: auto;
  padding-left:5%; 
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
}
.posts p {
    white-space: nowrap; 
  width: 90%; 
  height:10R;
  overflow: hidden;
  text-overflow:clip;
  padding-left:5%
}
.posts button{
  margin-top:15%;
  margin-left:25%;
}


</style>


<!------------>
 
