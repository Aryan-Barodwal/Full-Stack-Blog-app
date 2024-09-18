import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "../index";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import toast from "react-hot-toast";

import "./PostForm.css";

export default function PostForm({ post }) {
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    getValues,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.$id || "",
      contents: post?.contents || "",
      status: post?.status || "active",
    },
  });

  const delay = (t) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, t * 1000);
    });
  };

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  // const submit = async (data) => {
  //   await delay(1);
  //   setError("");

  //   console.log(data);

  //   // try {
  //   //   if (post) {
  //   //     const file = data.image[0]
  //   //       ? await appwriteService.uploadFile(data.image[0])
  //   //       : null;

  //   //     if (file) {
  //   //       appwriteService.deleteFile(post.featuredImage);
  //   //     }

  //   //     const dbPost = await appwriteService.updatePost(post.$id, {
  //   //       ...data,
  //   //       featuredImage: file ? file.$id : undefined,
  //   //     });

  //   //     if (dbPost) {
  //   //       navigate(`/post/${dbPost.$id}`);
  //   //       toast.success("Successfully Updated!");
  //   //     }
  //   //   } else {
  //   //     const file = await appwriteService.uploadFile(data.image[0]);

  //   //     if (file) {
  //   //       const fileId = file.$id;

  //   //       data.featuredImage = fileId;

  //   //       const dbPost = await appwriteService.createPost({
  //   //         ...data,
  //   //         userId: userData.$id,
  //   //       });

  //   //       if (dbPost) {
  //   //         navigate(`/post/${dbPost.$id}`);

  //   //         toast.success("Successfully created!");
  //   //       }
  //   //     }
  //   //   }
  //   // } catch (error) {
  //   //   setError(error.message);
  //   // }
  // };

  const submit = async (data) => {
    await delay(1);
    setError("");

    try {
      if (post) {
        const file = data.image[0]
          ? await appwriteService.uploadFile(data.image[0])
          : null;
        if (file) {
          appwriteService.deleteFile(post.featuredImage);
        }
        const dbPost = await appwriteService.updatePost(post.$id, {
          ...data,
          featuredImage: file ? file.$id : undefined,
        });
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      } else {
        const file = await appwriteService.uploadFile(data.image[0]);
        if (file) {
          const fileId = file.$id;
          data.featuredImage = fileId;
          const dbPost = await appwriteService.createPost({
            ...data,
            userId: userData.$id,
          });
          if (dbPost) {
            navigate(`/post/${dbPost.$id}`);

            toast.success("Successfully created!");
          } else {
          }
        }
      }
    } catch (error) {
      setError(error.message);
      toast.error("Failed!");
      toast(
        <div>
          <strong>Authentication in Progress!</strong> <br />
          Please try again in 2-3 minutes while we verify your credentials. <br />
          Thank you for your patience!
        </div>, 
        { duration: 6000 }
      );
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <div className="mt-16 px-5">
      <h1 className="border border-slate-500 border-none rounded-md bg-gradient-to-r from-[#b0caf7] via-[#bccff0] to-slate-200 p-2 ">
        <span className="hover:border-b- border-gray-300 cursor-pointer font-bold">
          {post ? "Edit post" : "Add Post"}
        </span>
      </h1>

      {isSubmitting ? (
        <div className="loader-top absolute z-10 w-full h-full ">
          <div className="loader w-full mx-auto flex justify-center items-center"></div>
        </div>
      ) : (
        ""
      )}

      {error && <p className=" text-red-600  text-center"> {error}</p>}

      <form
        onSubmit={handleSubmit(submit)}
        className="flex h-[130vh] justify-center mt-[-3.25rem] md:mt-5 md:flex-row flex-col "
      >
        <div className="md:w-2/3 px-2">
          <Input
            label="Title :"
            placeholder="Title"
            className="mb-4"
            {...register("title", { required: true })}
          />

          <Input
            label="Slug :"
            placeholder="Slug"
            className="mb-4"
            {...register("slug", { required: true })}
            onInput={(e) => {
              setValue("slug", slugTransform(e.currentTarget.value), {
                shouldValidate: true,
              });
            }}
          />

          <RTE
            label="Contents :"
            name="contents"
            control={control}
            defaultValue={getValues("contents")}
          />
          <br />
        </div>

        <div className="md:w-1/3 px-2">
          <Input
            label="Featured Image :"
            type="file"
            className="mb-4"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
          />

          {post && (
            <div className="w-full mb-4">
              <img
                src={appwriteService.getFilePreview(post.featuredImage)}
                alt={post.title}
                className="rounded-lg"
              />
            </div>
          )}
          <Select
            options={["active", "inactive"]}
            label="Status"
            className="mb-4 border border-gray-600 rounded-sm"
            {...register("status", { required: true })}
          />
          <Button
            type="submit"
            bgColor={post ? "bg-green-500" : undefined}
            className="w-full"
          >
            {post ? "Update" : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
}
