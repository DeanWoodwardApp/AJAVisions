'use client';
import Landing from '../components/Landing';
import Description from '../components/Description';
import SlidingImages from '../components/SlidingImages';
import FeedbackFromOthers from '../components/FeedbackFromOthers';

export default function Home() {

return (
    <main>
      <Landing />
      <Description />
      <FeedbackFromOthers />
      <SlidingImages />
    </main>
  )
}
