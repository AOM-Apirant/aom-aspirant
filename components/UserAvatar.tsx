'use client';

import Image from 'next/image';
import { useState } from 'react';

interface UserAvatarProps {
  userImage: string | null | undefined;
  userName: string | null | undefined;
  size?: number;
}

export default function UserAvatar({ userImage, userName, size = 60 }: UserAvatarProps) {
  const [imageError, setImageError] = useState(false);
  
  const getFallbackImage = (name: string | null | undefined) => {
    const userName = name || 'User';
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=6366f1&color=fff&size=${size}&bold=true&font-size=0.4&length=2`;
  };

  const getImageSrc = () => {
    if (imageError || !userImage || !userImage.startsWith('http')) {
      return getFallbackImage(userName);
    }
    return userImage;
  };

  return (
    <div className="relative">
      <Image 
        src={getImageSrc()}
        alt={`${userName || 'User'} Profile`}
        width={size} 
        height={size} 
        className="rounded-full outline-2 outline-white outline-offset-2 shadow-lg"
        onError={() => setImageError(true)}
      />
      <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
    </div>
  );
} 