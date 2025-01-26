import React, { useState } from "react";
import BGImg from "../../asest/BIke Evolution-27 1.jpg";
import BGimg1 from "../../asest/Section 5.png";
import personImg from "../../asest/2 1.png";
import { useForm } from "react-hook-form";
import { Box, Button, Modal, Typography, Container } from "@mui/material";
import logo from "../../asest/Group 1.png";

const WordlFirstSection = () => {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  function submit(data) {
    localStorage.setItem("user", JSON.stringify(data));
    setOpen(true);
  }
  
  function modalSubmission() {
    window.location.reload();
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 460,
  };

  return (
    <div className="bg-black">
      <img src={BGimg1} alt="" />
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 items-center">
        <div className="flex justify-center">
          <p className="text-cyan-500 text-3xl max-sm:my-10 md:my-10 max-sm:px-14 max-sm:text-center">
            World’s first of it’s kind Bikelight!
          </p>
        </div>
        <div>
          <img src={BGImg} alt="" />
        </div>
      </div>
      <div className="bgimg bg-no-repeat bg-cover lg:h-screen bg-center grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-sm:mt-5 items-center justify-center gap-10">
        <div className="flex items-center justify-end">
          <img src={personImg} className="object-contain w-96" alt="" />
        </div>
        <div className="bg-cyan-400 rounded-lg sm:w-full lg:w-[500px] flex items-center justify-center max-sm:mb-5">
          <form className="w-full px-4 py-4" onSubmit={handleSubmit(submit)}>
            <p className="text-black text-2xl font-bold">
              Evolutionize Your Bike
            </p>
            <h3 className="text-white !text-3xl font-bold">
              Get A Free Live Demo.
            </h3>
            <div className="my-3">
              <input
                {...register("name", { required: "Enter Your Name" })}
                type="text"
                className="!w-full p-3 rounded-lg"
                placeholder="Name"
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div className="my-3">
              <input
                {...register("email", { required: "Enter Your Email" })}
                type="email"
                className="!w-full p-3 rounded-lg"
                placeholder="Email"
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <button
              type="submit"
              className="py-2 px-3 text-xl rounded-lg font-semibold text-cyan-400 bg-gray-900"
            >
              Submit
            </button>
          </form>
          <Modal open={open}>
            <Container maxWidth="sm">
              <Box
                sx={style}
                className="absolute transform bg-cyan-500 rounded-xl shadow-lg p-4 h-auto text-center"
              >
                <img
                  src={logo}
                  className="absolute -top-10 w-20 left-48"
                  alt=""
                />
                <h1 className="text-center !text-3xl text-white font-bold mt-6">
                  Thank You!
                </h1>
                <h2 className="text-center text-sm text-white mt-3">
                  Your details have been received, and we appreciate your interest
                  in the Spectralite Bikelight. We’ll be in touch shortly with our
                  editorial kit and more exciting insights.
                </h2>
                <div className="text-center bg-cyan-900 py-2 mt-3 text-white rounded-lg">
                  <p className="text-sm">
                    In the meantime, feel free to explore <br /> our website for additional
                    product details and updates!
                  </p>
                </div>
                <button className="border-2 !border-cyan-900 text-white rounded-3xl px-3 py-2 font-semibold mt-4" onClick={modalSubmission}>
                  Visit Website
                </button>
              </Box>
            </Container>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default WordlFirstSection;
