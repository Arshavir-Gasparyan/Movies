import { INormalizedData } from "../../types/data";
import styles from "./MoviePreview.module.scss";

interface IMainVideoProps {
  data: INormalizedData;
  videoVisible: boolean;
}

export const MoviePreview = ({ data, videoVisible }: IMainVideoProps) => {
  const {
    titleImage,
    title,
    releaseYear,
    mpaRating,
    duration,
    description,
    videoUrl,
  } = data;

  return (
    <div className={styles.movie_preview_container}>
      {videoVisible && videoUrl ? (
        <video controls={false} loop className={styles.video} autoPlay>
          <source src={videoUrl} type="video/mp4" />
        </video>
      ) : (
        <div className={styles.movie_details}>
          <div className={styles.movie}>{"Movie"}</div>
          <div className={styles.title_image}>
            <img alt={title} src={titleImage} />
          </div>
          <div className={styles.additional_info}>
            {`${releaseYear} ${mpaRating} ${duration}`}
          </div>
          <div className={styles.description}>{description}</div>
        </div>
      )}
    </div>
  );
};
