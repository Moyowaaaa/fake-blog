<template>
    <div>

<div class="header">

   <h1><router-link class="link" to='/'> Home </router-link></h1>

    </div>
    <div class="image">
    </div>

            <div class="content">
        <!---------------
        {{ $route.params.id }}
       --------->
        <h1>{{ post.title }}</h1>
        <br>
        <p>{{ post.body }}</p>


        </div>



<div class="com">
    <h3>Comments</h3>

        <div class="comments">
           



           
            <div class="contents"  v-for="comment in comments"
        :key="comment.id"
        :id="comment.id"
        :comment="comment">

                <h4>{{ comment.email }}</h4>
                <p style="margin-left:5%">{{ comment.body }}</p>
            </div>
        


        </div>
        </div>

        <!---------------
        <div class="comments"
        v-for="comment in comments"
        :key="comment.id"
        :id="comment.id"
        :comment="comment"
        >
            <p>{{ comment.id }}</p>
        </div>
        ----->
       
    </div>
</template>


<script>
import axios from 'axios'

export default {
    
    data() {
        return {
            post: [],
            comments:[],
          
         
        }   
    },
    
    methods: {
        async getPost(id){
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            this.post = response.data
        },
         async getComments(id){
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments` )
            this.comments = response.data
        },
        
    },
    mounted() {
        this.getPost(this.$route.params.id);
        this.getComments(this.$route.params.id)
    }
}
</script>

<style scoped>
.header{
    background:steelblue;
    height:70px;
    margin:-1.5%;
}
.header .link {
    padding-top:50px;
    margin-left:10%;
    color:white;
    font-size: 20px;;
    text-decoration: none;;
}
.header .link:active{
    text-decoration:underline;
}
.com{
    margin:5%;
}
.com h3{
    margin-left:2%
}
.content h1{
    text-align: center;
}
.content p{
    margin-left:5%;
}
.comments{
    display: flex;;
    flex-wrap: wrap;
}
.comments .contents{
    width:45%;
    margin-left: 2%;
    margin-top:2%;
    border:2px solid black;
}
 .contents h4{
    margin-left:2%;
}

</style>