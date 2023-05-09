// here the posts get fetched

import React from 'react'
import { Header } from '../components/header/header'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { fetchPosts } from '../features/posts/postSlice'
import { useDispatch } from 'react-redux'
import { selectUser } from '../features/selectors'
import { selectPosts } from '../features/selectors'

export default function Posts() {
  const navigate = useNavigate();
  const postsState = useSelector(selectPosts);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);


  return (
    <>
    <Header />
    <div>
      
        {postsState.data && (
        <ul>
          {postsState.data.map((p) => {
            return (
              <li key={p.id}>
                <h5>
                  "{p.content}" by {p.user.username}
                </h5>
              </li>
            );
          })}
        </ul>
      )}
      {postsState.error && <h4>Oops, something went wrong..</h4>}
    </div>
    </>
    
  )
}
