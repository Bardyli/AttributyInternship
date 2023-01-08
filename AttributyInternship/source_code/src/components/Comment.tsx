import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebase-config';

const Comment = () => {
    const [newComment, setNewComment] = useState("")
    const [comments, setComments] = useState<any>([]);
    const commentsCollectionRef = collection(db, "comments");

    useEffect(() => {
      const getComments = async () => {
        const data = await getDocs(commentsCollectionRef);
        setComments(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        
      };
      getComments();
    })

    const createComment = async () => {
      await addDoc(commentsCollectionRef, {Comment: newComment});
    }

    const deleteComment = async (id: any) => {
      const commentDoc = doc(db, "comments", id);
      await deleteDoc(commentDoc);
    }

    return (
      <div className=" h-auto flex flex-col items-center -mt-52 text-start div3 md:h-20 md:-mt-96">
        
          <h3 className="my-3 mx-0 text-lg font-semibold w-96">Comment</h3>
          <div className="flex flex-row items-start">
          <textarea placeholder='Comment' onChange={(event) => {setNewComment(event.target.value)}} className="h-20 w-96 bg-slate-400 pt-2 pl-2"/>
          <button onClick={createComment} className="h-10 w-20 bg-blue-400 text-white text-base mt-3 rounded border-none cursor-pointer ml-4">Submit</button>
        </div>

        <div>
          {comments.map((comment: { id: React.Key | null | undefined; Comment: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
            return (
              <>
                <div className="flex flex-row items-start">
                  <div className="h-auto w-96 bg-blue-400 rounded my-3 mx-0 break-all pl-2 pt-2"  key={comment.id}>{comment.Comment}</div>
                  <button onClick={() => deleteComment(comment.id)}  className="h-10 w-20 bg-red-500 text-white text-base mt-3 rounded border-none cursor-pointer ml-4">Delete</button>
                </div>
              </>
            )
          })}
        </div>
      </div>
    );
  }

export default Comment;