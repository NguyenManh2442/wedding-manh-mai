import { useEffect, useState } from 'react';

import { db } from 'src/common/firebase/Firebase';
import {
  query,
  collection,
  orderBy,
  addDoc,
  onSnapshot,
} from 'firebase/firestore';

import * as CS from 'src/common/components/Styles';
import * as S from './Styles';
import Post from './Post';

import { WeddingPost } from 'src/common/types/WeddingPost';

function GuestBook() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [weddingPosts, setWeddingPost] = useState<WeddingPost[]>([]);

  useEffect(() => {
    // https://firebase.google.com/docs/firestore/quickstart#read_data
    const dbWeddingPosts = query(
      collection(db, 'wedding-posts'),
      orderBy('timestamp', 'desc'),
    );
    onSnapshot(dbWeddingPosts, (snapshot) => {
      const weddingPosts: WeddingPost[] = snapshot.docs.reduce(
        (acc: WeddingPost[], doc) => {
          const tempWeddingPost = new WeddingPost(doc.id, doc.data());
          acc.push(tempWeddingPost);
          return acc;
        },
        [],
      );
      setWeddingPost(weddingPosts);
    });
  }, [weddingPosts.length]);

  const sendPost = (e: any) => {
    e.preventDefault();

    const trimmedName = name.trimStart().trimEnd();
    const trimmedMessage = message.trimStart().trimEnd();
    if (trimmedName === '' || trimmedMessage === '') {
      alert('이름과 내용을 채워주세요.');
      return;
    }

    addDoc(collection(db, 'wedding-posts'), {
      name: trimmedName,
      message: trimmedMessage,
      timestamp: new Date().getTime(),
    });

    setMessage('');
  };

  return (
    <CS.CommonContainer>
      <CS.HorizontalBar />
      <CS.CommonMargin margin="40px" />
      <CS.CommonTitle>LƯU BÚT</CS.CommonTitle>
      <CS.CommonBody>
        <S.GuestBookPost>
          <form>
            <S.Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Nhập họ tên"
              required
            />
            <br></br>
            <br></br>
            <S.TextArea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Nhập lời chúc mừng"
              required
            />
            <br></br>
            <br></br>
            <S.Button onClick={sendPost} type="submit">
              Gửi lời chúc
            </S.Button>
          </form>
        </S.GuestBookPost>
        <CS.CommonMargin margin="50px" />
        <CS.HorizontalBar />
        <CS.CommonMargin margin="50px" />
        {weddingPosts.map(({ id, name, message, date }) => (
          <Post key={id} name={name} message={message} date={date} />
        ))}
      </CS.CommonBody>
    </CS.CommonContainer>
  );
}

export default GuestBook;
