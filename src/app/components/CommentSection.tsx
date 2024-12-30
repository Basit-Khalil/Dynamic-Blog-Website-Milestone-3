import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

interface Comment {
  id: string;
  postId: string;  // Add postId to associate the comment with a post
  author: string;
  text: string;
}

interface CommentSectionProps {
  postId: string;
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [authorName, setAuthorName] = useState('');
  const [newComment, setNewComment] = useState('');
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  // Add a new comment
  const handleAddComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const newCommentObj: Comment = {
        id: new Date().toISOString(),
        postId, // Use postId to associate this comment with a specific post
        author: authorName,
        text: newComment,
      };
      setComments([...comments, newCommentObj]);
      setNewComment('');
      setAuthorName('');
    }
  };

  // Edit an existing comment
  const handleEditComment = (commentId: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentId);
    if (commentToEdit) {
      setNewComment(commentToEdit.text);
      setAuthorName(commentToEdit.author);
      setEditingCommentId(commentId);
    }
  };

  // Save the edited comment
  const handleSaveEditedComment = () => {
    if (newComment.trim() && authorName.trim() && editingCommentId) {
      const updatedComments = comments.map((comment) =>
        comment.id === editingCommentId
          ? { ...comment, text: newComment, author: authorName }
          : comment
      );
      setComments(updatedComments);
      setNewComment('');
      setAuthorName('');
      setEditingCommentId(null);
    }
  };

  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold">Comments</h2>
      <div className="my-4 space-y-4">
        {comments.length > 0 ? (
          comments
            .filter((comment) => comment.postId === postId) // Only show comments for the current post
            .map((comment) => (
              <Card key={comment.id}>
                <CardContent className="p-4">
                  <div className="font-semibold">{comment.author}</div>
                  <p>{comment.text}</p>
                  <Button
                    onClick={() => handleEditComment(comment.id)}
                    className="mt-2 text-blue-500"
                  >
                    Edit
                  </Button>
                </CardContent>
              </Card>
            ))
        ) : (
          <p className="text-slate-400">No Comments Yet</p>
        )}
      </div>
      <div className="mt-6">
        <Input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Your Name"
          className="w-full mb-4"
        />
        <Input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="w-full mb-4"
        />
        <Button
          onClick={editingCommentId ? handleSaveEditedComment : handleAddComment}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white"
        >
          {editingCommentId ? 'Save Changes' : 'Add Comment'}
        </Button>
      </div>
    </div>
  );
}

