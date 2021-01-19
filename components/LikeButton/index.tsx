import useSWR from 'swr';
import { useEffect, useState } from 'react';

import { useAuth } from '@/lib/auth';
import { addLike, removeLike } from '@/lib/db';
import { Recipe } from '@/models';
import IconBadge from '../IconBadge';
import LikeIcon from '../LikeIcon';

interface LikeButtonProps {
  recipe: Recipe;
}

const LikeButton = ({ recipe }: LikeButtonProps) => {
  const auth = useAuth();
  const { data } = useSWR('/api/recipes/likes?uid=' + recipe.uid);
  const [likes, setLikes] = useState<Recipe['likes']>([]);
  const onClick = () => {
    if (likes && auth.user) {
      if (likes.some((like) => like.userId === auth.user?.uid)) {
        removeLike(recipe, auth.user.uid);
        setLikes((ls) => ls.filter((like) => like.userId !== auth.user?.uid));
      } else {
        addLike(recipe, auth.user.uid);
        setLikes((ls) => [...ls, { userId: auth.user.uid }]);
      }
    }
  };

  useEffect(() => {
    if (data) {
      setLikes(data as Recipe['likes']);
    }
  }, [data]);

  return (
    <IconBadge
      IconComponent={LikeIcon}
      color="#000000"
      fontSize={18}
      iconColor={likes && likes.some((l) => l.userId === auth.user?.uid) ? '#F2C94C' : '#CDCDCD'}
      iconSize={7}
      mr={6}
      cursor={auth.user ? 'pointer' : 'initial'}
      onClick={auth.user ? onClick : undefined}
    >
      {likes.length}
    </IconBadge>
  );
};

export default LikeButton;
