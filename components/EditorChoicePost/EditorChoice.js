import { Image } from 'react-bootstrap';
import Link from 'next/link';

import EditorChoiceStyle from './EditorChoiceStyle';

const EditorChoicePost = () => (
  <EditorChoiceStyle>
    <div id="editor-choice-section">
      <div className="article-img">
        <Link as={`/`} href={`/`}>
          <a>
            <div className="image-wrapper">
              <Image src="/static/trending-posts/p2.jpg" />
            </div>
          </a>
        </Link>
      </div>
      <div className="article-content">
        <Link as={`/`} href={`/`}>
          <a>
            <h5 className="category-title">Interviews</h5>
          </a>
        </Link>
        <Link as={`/`} href={`/`}>
          <a>
            <h2 className="article-title">
              <span>101 quotes about design and creativity</span>
            </h2>
          </a>
        </Link>
        <p className="article-desc">
          လူမျိုးအသီးသီး၊ ဘာသာစကား အသီးသီးတို့တွင် အများအားဖြင့်
          စာနှင့်စာပေရှိကြ၏။ စာနှင့်စာပေ မရှိသော လူမျိုးငယ်များမှာ ယခုအခါ
          ကမ္ဘာပေါ်၌ ပြောပလောက်အောင် မရှိတော့ချေ။
        </p>
        <h6 className="article-author">
          By&nbsp;
          <Link as={`/`} href={`/`}>
            <a>Shwe Yee</a>
          </Link>
        </h6>
      </div>
    </div>
    <style jsx>{``}</style>
  </EditorChoiceStyle>
);
export default EditorChoicePost;
