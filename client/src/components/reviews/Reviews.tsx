import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useEffect } from 'react';
import { useSephoraContext } from '../../context/SephoraContext';
import './reviews.css';

type ReviewsProps = {
  id: string;
};

const Reviews: React.FC<ReviewsProps> = ({ id }) => {
  const { reviews, setReviews } = useSephoraContext();

  useEffect(() => {
    axios.get(`http://localhost:3001/reviews/${id}`).then((response) => {
      setReviews(response.data);
    });
  }, [id, setReviews]);

  const initialValues = {
    username: '',
    review: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15),
    review: Yup.string(),
  });

  return (
    <div className="reviews__container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          axios
            .post('http://localhost:3001/reviews', {
              username: values.username,
              review: values.review,
              productId: id,
            })
            .then(() => {
              const newReview = {
                username: values.username,
                review: values.review,
              };
              setReviews([...reviews, newReview]);
            });
          resetForm();
        }}
      >
        <Form className="form__container">
          <ErrorMessage name="username" component="span" />
          <Field
            className="input__name"
            autoComplete="off"
            id="inputReview"
            name="username"
            placeholder="Enter name"
          />

          <ErrorMessage name="review" component="span" />
          <Field
            className="input__text"
            autoComplete="off"
            id="inputReview"
            name="review"
            placeholder="Enter review"
          />

          <button type="submit" className="form__button">
            Create Review
          </button>
        </Form>
      </Formik>

      <div>
        <h2 className="reviews__title">Reviews</h2>
        {reviews.length > 0 ? (
          <div className="review__card">
            {reviews.map((review, key) => {
              return (
                <div className="review__item" key={key}>
                  <p className="review__item-description">{review.review}</p>
                  <p className="review__item-name">{review.username}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="reviews__empty">There are no reviews yet.</div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
