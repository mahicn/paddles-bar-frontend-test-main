import { _classes } from '../utilities/helpers';
import styles from '../styles/modules/Home.module.scss';
import HoursSection from '../components/HoursSection';
import Image from 'next/image';

const cl = _classes(styles);

function Home(props) {
  const page = {};
  const renderFaqs = () => (
    <div preset={'fadeup'} className={cl('faqs')}>
      <h1>FAQ</h1>
      <ol>
        {props.page.fieldgroup2.map((item, index) => {
          return (
            <li key={index}>
              <h2 className={cl('question')}>{item.h1}</h2>
              <div
                className={cl('answer')}
                dangerouslySetInnerHTML={{ __html: item.h2 }}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
  return (
    <div className={cl('_')}>
      <div className={cl('hero')}>
        {props.page.fieldgroup1.map((image)=>{
            return(
              <div key={image.id} className={cl('image')} >
                <Image
                src={image.image1}
                alt={image.image1_alt_text}
                width={1000}
                height={1000}
                style={{width:"100%"}}
                />
              </div>

          )
        })}
      </div>
      <div className={cl('faqs__section')}>
        <div className={cl('container')}>{renderFaqs()}</div>
      </div>
      <div className={cl('hours__section')}>
        <HoursSection data={props.page}/>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/items/1');
  const page = await res.json();


  return {
    props: {
      page: page.data,
    },
  };
}

export default Home;
