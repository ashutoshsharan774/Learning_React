import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../components'
import appwriteService from "../appwrite/configuration";
import { useNavigate,  useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState(null)//sbse pahle post chahiye honge
    const {slug} = useParams()//slug lagega(since edit krna h toh user click krega phir us page pr jyega toh url mei available hoga that's wahy we are using useParams )
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            //agar slug ha 
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
   //conditional return-> ki agar post h then return  
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost