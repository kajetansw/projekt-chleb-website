import useSWR from 'swr';
import { useEffect, useState } from 'react';
import { Button } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
import { addLike, removeLike } from '@/lib/db';
import { Recipe } from '@/models';
import LikeIcon from '../LikeIcon';

interface LikeButtonProps {
  recipe: Recipe;
  onLikesChange: (likes: Recipe['likes']) => void;
}

const LikeButton = ({ recipe, onLikesChange }: LikeButtonProps) => {
  const auth = useAuth();
  const { data } = useSWR('/api/recipes/likes?uid=' + recipe.uid);
  const [likes, setLikes] = useState<Recipe['likes']>([]);
  const onClick = () => {
    if (likes && auth.user) {
      if (likes.some((like) => like.userId === auth.user?.uid)) {
        removeLike(recipe, auth.user.uid);
        setLikes((ls) => {
          const newLikes = ls.filter((like) => like.userId !== auth.user?.uid);
          onLikesChange(newLikes);
          return newLikes;
        });
      } else {
        addLike(recipe, auth.user.uid);
        setLikes((ls) => {
          const newLikes = [...ls, { userId: auth.user!.uid }];
          onLikesChange(newLikes);
          return newLikes;
        });
      }
    }
  };
  const likeButton =
    likes && likes.some((l) => l.userId === auth.user?.uid) ? (
      <Button variant="outline" colorScheme="yellow" onClick={auth.user ? onClick : undefined}>
        <LikeIcon color="#B7791F" mr={2} /> Lubisz ten przepis!
      </Button>
    ) : (
      <Button colorScheme="yellow" onClick={auth.user ? onClick : undefined}>
        <LikeIcon color="#000" mr={2} /> Polub ten przepis!
      </Button>
    );

  useEffect(() => {
    if (data) {
      setLikes(data as Recipe['likes']);
    }
  }, [data]);

  return <>{auth?.user ? likeButton : null}</>;
};

export default LikeButton;
