import SectionTitle from "../../../components/SectionTitle/SectionTitle";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

// rating
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="w-10/12 mx-auto flex flex-col items-center justify-center mb-20">
      <SectionTitle
        subHeading={"What our Clients Say"}
        heading={"Testimonials"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="w-full">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col justify-center items-center gap-4 text-center px-16">
              <Rating style={{ maxWidth: 250 }} value={review.rating} />
              <FaQuoteLeft className="text-8xl" />
              <p>{review.details}</p>
              <h4 className="text-4xl text-orange-300">{review.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
