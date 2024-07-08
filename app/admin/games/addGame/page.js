"use client";
import { useState, useEffect } from "react";
import { useForm, Controller } from 'react-hook-form';
//import { addGame } from "@/apiFunction";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Select from 'react-select';

export default function AddGame() {
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const router = useRouter();

//   const submitForm = async (data) => {
//     const formData = new FormData();
//     formData.append("GameName", data.GameName);
//     formData.append("Levels", data.Levels);
//     formData.append("GameDescription", data.GameDescription);
//     formData.append("HowToPlay", data.HowToPlay);
//     formData.append("Rules", data.Rules);
//     formData.append("TopPlayers", data.TopPlayers);
//     formData.append("Challenges", data.Challenges);
//     formData.append("TeamDetails", data.TeamDetails);
//     formData.append("GameMetadata", data.GameMetadata);
//     formData.append("Genre", data.Genre);
//     formData.append("GameBackgroundImage", data.GameBackgroundImage[0]);

//     for (let i = 0; i < data.GameImages.length; i++) {
//       formData.append("GameImages", data.GameImages[i]);
//     }

//     let res = await addGame(formData);
//     if (res && !res?.message) {
//       router.push("/admin/games");
//       toast.success("Game Added Successfully");
//     } else {
//       toast.error(res?.message || "Something went wrong");
//     }
//   };

  return (
    <section>
      <h1 className="text-2xl text-black-600 underline mb-3 font-bold">Add Game Details</h1>
      <form className="mb-5" >
        <div className="grid gap-4 mb-4 md:grid-cols-2">
          <div className="w-full">
            <label htmlFor="GameName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Game Name <span className="text-red-600">*</span></label>
            <input
              type="text"
              id="GameName"
              {...register('GameName', { required: 'Game Name is required' })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Game Name"
            />
            {errors.GameName && <span className="text-red-500">{errors.GameName.message}</span>}
          </div>
          <div className="w-full">
            <label htmlFor="Levels" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Levels <span className="text-red-600">*</span></label>
            <input
              type="number"
              id="Levels"
              {...register('Levels', { required: 'Levels are required', min: 1 })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Levels"
            />
            {errors.Levels && <span className="text-red-500">{errors.Levels.message}</span>}
          </div>
          <div className="w-full">
            <label htmlFor="GameImages" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Game Images <span className="text-red-600">*</span></label>
            <input
              type="file"
              id="GameImages"
              {...register('GameImages', { required: 'Game Images are required' })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Game Images"
              multiple
            />
            {errors.GameImages && <span className="text-red-500">{errors.GameImages.message}</span>}
          </div>
          <div className="w-full">
            <label htmlFor="GameDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Game Description <span className="text-red-600">*</span></label>
            <textarea
              id="GameDescription"
              {...register('GameDescription', { required: 'Game Description is required' })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Game Description"
            />
            {errors.GameDescription && <span className="text-red-500">{errors.GameDescription.message}</span>}
          </div>
          <div className="w-full">
            <label htmlFor="HowToPlay" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">How to Play <span className="text-red-600">*</span></label>
            <textarea
              id="HowToPlay"
              {...register('HowToPlay', { required: 'How to Play is required' })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="How to Play"
            />
            {errors.HowToPlay && <span className="text-red-500">{errors.HowToPlay.message}</span>}
          </div>
          <div className="w-full">
            <label htmlFor="Rules" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rules <span className="text-red-600">*</span></label>
            <textarea
              id="Rules"
              {...register('Rules', { required: 'Rules are required' })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Rules"
            />
            {errors.Rules && <span className="text-red-500">{errors.Rules.message}</span>}
          </div>
          <div className="w-full">
            <label htmlFor="TopPlayers" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Top Players <span className="text-red-600">*</span></label>
            <textarea
              id="TopPlayers"
              {...register('TopPlayers', { required: 'Top Players are required' })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Top Players"
            />
            {errors.TopPlayers && <span className="text-red-500">{errors.TopPlayers.message}</span>}
          </div>
          <div className="w-full">
            <label htmlFor="Challenges" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Challenges <span className="text-red-600">*</span></label>
            <textarea
              id="Challenges"
              {...register('Challenges', { required: 'Challenges are required' })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Challenges"
            />
            {errors.Challenges && <span className="text-red-500">{errors.Challenges.message}</span>}
          </div>
          <div className="w-full">
            <label htmlFor="TeamDetails" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Team Details <span className="text-red-600">*</span></label>
            <textarea
              id="TeamDetails"
              {...register('TeamDetails', { required: 'Team Details are required' })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Team Details"
            />
            {errors.TeamDetails && <span className="text-red-500">{errors.TeamDetails.message}</span>}
          </div>
          <div className="w-full">
            <label htmlFor="GameMetadata" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Game Metadata <span className="text-red-600">*</span></label>
            <textarea
              id="GameMetadata"
              {...register('GameMetadata', { required: 'Game Metadata is required' })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Game Metadata"
            />
            {errors.GameMetadata && <span className="text-red-500">{errors.GameMetadata.message}</span>}
          </div>
          <div className="w-full">
            <label htmlFor="Genre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genre <span className="text-red-600">*</span></label>
            <input
              type="text"
              id="Genre"
              {...register('Genre', { required: 'Genre is required' })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Genre"
            />
            {errors.Genre && <span className="text-red-500">{errors.Genre.message}</span>}
          </div>
          <div className="w-full">
            <label htmlFor="GameBackgroundImage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Game Background Image <span className="text-red-600">*</span></label>
            <input
              type="file"
              id="GameBackgroundImage"
              {...register('GameBackgroundImage', { required: 'Game Background Image is required' })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Game Background Image"
            />
            {errors.GameBackgroundImage && <span className="text-red-500">{errors.GameBackgroundImage.message}</span>}
          </div>
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white p-2 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </section>
  );
}
