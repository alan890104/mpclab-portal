import logo from './logo.jpg';
import { Linktree, CHANNEL_TYPES } from 'linkees';
import Footer from "./footer.jsx";
import './App.css';

function App() {
  const ASIA_DRAGON = (port) => `http://140.113.216.115${(port) ? ":" + port : ''}`
  const GL = (port) => `http://140.113.216.109${(port) ? ":" + port : ''}`
  // const OJ = (port) => `http://140.113.216.100${(port) ? ":" + port : ''}`

  const items = [
    {
      title: 'Gitlab',
      subtitle: "🏡 to all mpclab member's projects",
      type: CHANNEL_TYPES.WEBSITE,
      link: ASIA_DRAGON(),
      image: 'https://about.gitlab.com/images/new_logo/A.jpg',
    },
    {
      title: 'Superset',
      subtitle: 'Database query and visualization UI',
      type: CHANNEL_TYPES.WEBSITE,
      link: ASIA_DRAGON(8088),
      image: 'https://superset.apache.org/img/superset-logo-horiz.svg',
    },
    {
      title: 'Nebula graph',
      subtitle: 'Graph database query UI',
      type: CHANNEL_TYPES.WEBSITE,
      link: ASIA_DRAGON(7001),
      image: "https://user-images.githubusercontent.com/1651790/191656620-3e24764f-26d2-4b9b-b408-94b9eca5cc3e.png",
    },
    {
      title: 'Online Judge Repo',
      subtitle: 'Online judge server (for exams and labs)',
      type: CHANNEL_TYPES.GITHUB,
      link: "https://github.com/alan890104/OJ",
      image: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    // {
    //   title: 'Jupyter Notebook',
    //   subtitle: 'jupyter server for training DL models',
    //   type: CHANNEL_TYPES.WEBSITE,
    //   link: GL(8888),
    //   image: "https://blogs.swarthmore.edu/its/wp-content/uploads/2022/03/jupyter_logo.png",
    // },
    // {
    //   title: '實驗室協作平台',
    //   subtitle: 'mpclab google site',
    //   type: CHANNEL_TYPES.WEBSITE,
    //   link: "http://sites.google.com/site/nctumpclab",
    //   image: "https://i0.wp.com/www.rauldiego.es/wp-content/uploads/2018/09/Google-Sites.jpg?fit=1395%2C690&ssl=1",
    // },
    {
      title: 'OtterScan',
      subtitle: 'Erigon以太坊區塊瀏覽器',
      type: CHANNEL_TYPES.WEBSITE,
      link: GL(5100),
      image: "https://pbs.twimg.com/profile_images/1562361921810186240/Kaa35Fbl_400x400.jpg",
    }
  ];
  return (
    <>
      <div>
        <header>
          <div className='myheader'>
            <img src={logo} alt="logo" className='myimg' />
            <h1 className='headerText'> Portal ▪️ MPC Lab </h1>
          </div>
          <Linktree
            class='title'
            cardItems={items}
          />
        </header>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
