interface PreloaderProps {
  load: boolean;
}

const Preloader: React.FC<PreloaderProps> = (props) => {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
};

export default Preloader;
