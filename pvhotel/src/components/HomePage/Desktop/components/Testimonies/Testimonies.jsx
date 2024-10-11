import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';


const TestimonialWrapper = styled.div`
  padding: 50px 0;
  text-align: center;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: bold;
`;

const TestimonialCard = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 15px;

  text-align: left;
  max-width: 400px;
  margin: auto;
`;

const TestimonialDate = styled.p`
  font-size: 0.9rem;
  color: gray;
  margin-bottom: 10px;
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const ReviewerInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const ReviewerAvatar = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 15px;
`;

const ReviewerName = styled.p`
  font-weight: bold;
`;

const Stars = styled.div`
  margin-top: 10px;
  font-size: 1.2rem;
  color: #f9c84b;
`;


const Testimonies = () => {
  const testimonials = [
    {
      date: '2 Mar, 2023',
      text: 'The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results...',
      name: 'Anthony Bruff',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5,
    },
    {
      date: '25 Mar, 2023',
      text: 'The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results...',
      name: 'Regina Gella',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 4,
    },
    {
      date: '6 Apr, 2023',
      text: 'The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results...',
      name: 'Jamiya Aliyu',
      avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
      rating: 5,
    },{
        date: '2 Mar, 2023',
        text: 'The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results...',
        name: 'Anthony Bruff',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        rating: 5,
      },
      {
        date: '25 Mar, 2023',
        text: 'The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results...',
        name: 'Regina Gella',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        rating: 4,
      },
      {
        date: '6 Apr, 2023',
        text: 'The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results...',
        name: 'Jamiya Aliyu',
        avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
        rating: 5,
      },
  ];

  const renderStars = (count) => {
    return '★'.repeat(count);
  };

  return (
    <TestimonialWrapper>
      <Title>Testimonies</Title>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard>
              <TestimonialDate>{testimonial.date}</TestimonialDate>
              <TestimonialText>{testimonial.text}</TestimonialText>
              <Stars>{renderStars(testimonial.rating)}</Stars>
              <ReviewerInfo>
                <ReviewerAvatar src={testimonial.avatar} alt={testimonial.name} />
                <ReviewerName>{testimonial.name}</ReviewerName>
              </ReviewerInfo>
            </TestimonialCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </TestimonialWrapper>
  );
};

export default Testimonies;
