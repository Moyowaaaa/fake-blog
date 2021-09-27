<template>
<div class="blog">



<div class="content">
   
    <div class="post">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>

        <button><router-link class= "router" :to="'Post/' + id">Read More </router-link></button>
    </div>
   
 
</div>


    
</div>

</template>


<script>
export default {
  name: 'Blog',
  props: ["post", "id"]
}
</script>

<style scoped>

.blog{
  display: inline-flex;;
  flex-wrap: wrap;
   margin:2%;
   margin-left:5%
   
}

.post{
  width:300px;
  height:auto;
  padding-bottom:5%;
  border:2px solid teal;
}
.post button{
  color:black;
  border:1px solid black;
  background:teal;
  margin-left:25%;
}
.post h3{
    white-space: nowrap; 
  width: auto;
  padding-left:2%; 
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
}
.post p{
  padding-left:2%;
}
 .router{
   font-size:18px;
   color:black;
   text-decoration: none;;
 }
</style>