import style from '@/theme-image.module.css';
import Image, {ImageProps, StaticImageData} from 'next/image';

type Props = Omit<ImageProps, 'src' | 'priority' | 'loading'> & {
  srcLight: StaticImageData;
  srcDark: StaticImageData;
};

const LogoTheme = (props: Props) => {
  const {srcLight, srcDark, alt, ...rest} = props;
  return (
    <>
      <div className={style.imgLight}>
        <Image {...rest} alt={alt} src={srcLight} />
      </div>
      <div className={style.imgDark}>
        <Image {...rest} alt={alt} src={srcDark} />
      </div>
    </>
  );
};

export default LogoTheme;
