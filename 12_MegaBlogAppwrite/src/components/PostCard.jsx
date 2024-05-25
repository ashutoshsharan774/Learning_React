import React from 'react'
import appwriteService from '../appwrite/configuration'
import {Link} from 'react-router-dom'

function PostCard({$id,title,featuredImage}) {//postcard ko display krne k liye ky ky chahiye ,$id is appwrite syntax



    return (//to make our cards clickable use Link(Link ki special feature h ki jaha pr ha wahi se url demand krta h )
       <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                  <img src={appwriteService.getFilePreview(featuredImage)} alt={title} />
                </div>
                <h2
                className='text-xl font-bold'
                >{title}</h2>
            </div>
       </Link>

    )
}

export default PostCard
