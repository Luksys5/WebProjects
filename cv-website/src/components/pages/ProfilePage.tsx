import React, { Suspense } from 'react';
import { Button } from '../atoms/Button';
import { Spinner } from '../atoms/Spinner';
import { Post } from '../../types/Post';
import { Comment } from '../../types/Comment';

type ProfilePageProps = {
    resource: any;
    isPending?: boolean;
    retrieveComment: (inc: number) => void;
}
export const SuspendedProfilePage: React.SFC<ProfilePageProps> = ({ resource, retrieveComment }) => {
    return (
        <div className='p-profile'>
            <Suspense fallback={<Spinner />}>
                <ProfileDetails resource={resource} />
            </Suspense>
            {/* <Suspense fallback={<Spinner />}>
                <ProfilePosts resource={deferredResource} isStale={deferredResource !== resource} />
            </Suspense> */}
            <div className='p-profile__buttons'>
                <Button
                // disabled={isPending}
                // className={isPending ? 'a-button--disabled' : ''}
                onClick={() => retrieveComment(-1)}
                >
                    Previous
                </Button>
                <Button
                // disabled={isPending}
                // className={isPending ? 'a-button--disabled' : ''}
                onClick={() => retrieveComment(1)}
                >
                    Next
                </Button>
             </div>
        </div>
    )
}

type ProfileDetailsProps = {
  resource: any;
};

export const ProfileDetails: React.SFC<ProfileDetailsProps> = ({resource}) => {
  const comment: Comment = resource.comment.read();
  return (
    <article className='m-profile-details'>
      <h2>Comment { comment.id }</h2>
      <section>
        <ul>
            <li>Body { comment.body }</li>
            <li>PostID: { comment.postId }</li>
        </ul>
      </section>
    </article>
  )
}

type ProfilePostsProps = {
  resource: any;
  isStale: boolean;
};

export const ProfilePosts: React.SFC<ProfilePostsProps> = ({resource, isStale}: any) => {
  const posts: Post[] = resource.posts.read();
  return (
    <article className='m-profile-posts'>
        <h3>Latest Posts</h3>
        <section style={{opacity: isStale ? 0.7 : 1}}>
            <ul>
                {
                    posts.map(post => 
                        <li key={post.id}>{post.title}</li>
                    )
                }
            </ul>
        </section>
    </article>
  )
}
