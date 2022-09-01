import Head from "next/head";
import Image from 'next/image';
import {useRef, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import useAuth from "../hooks/useAuth";
import {useRouter} from "next/router";

interface  inputs {
    email:string;
    password:string;
}

function Login() {
    const[login,setLogin] = useState<boolean>(false);
    const {signIn,signUp} =useAuth()
    const router =useRouter();


    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm<inputs>();
    const onSubmit:SubmitHandler<inputs> = async (data) => {
        if (login) {
            await signIn(data.email, data.password)
        } else {
            await signUp(data.email, data.password)
        }
    }


  return (
    <div className="relative flex h-screen flex-col bg-black md:items-center  md:justify-center md:bg-transparent">
        <Head>
            <title>Netflix</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Image
            src="https://rb.gy/p2hphi"
            layout="fill"
            className="-z-10 !hidden opacity-60 sm:!inline"
            objectFit="cover"
        />

        <img
            src="https://rb.gy/ulxxee"
            className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
            width={150}
            height={150}

        />


        <form onSubmit={handleSubmit(onSubmit)} className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
            <h1 className=" text-4xl  font-semibold  md:font-medium">로그인 </h1>
            <div className="space-y-4">
                <label className="inline-block w-full">
                    <input type="email" placeholder="이메일 " className="input" {...register('email',{required:true})}/>
                    {errors.email && <p className="text-[13px] font-light text-orange-500">이메일을 입력해주세요!</p>}
                </label>
                <label className="inline-block w-full">
                    <input type="password" placeholder="비밀번호" className="input" {...register('password',{required:true,minLength:8})} />
                    {errors.password?.type === 'required' && <p className="text-[13px] font-light text-orange-500">비밀번호를 입력해주세요!</p>}
                    {errors.password?.type === "minLength" && <p className="text-[13px] font-light text-orange-500">최소 8자리를 입력해주세요!</p>}
                </label>
            </div>
            <button className="w-full rounded bg-[#e50914] py-3 font-semibold " onClick={() => setLogin(true)}>로그인</button>
            <div className="text-[gray]">
                넷플릭스가 처음이신가요 ?{" "}
                <button  type="submit" className="text-white hover:underline px-3" onClick={() => setLogin(false)}> 회원가입 </button>
            </div>
        </form>
    </div>
  );
}

export default Login;
