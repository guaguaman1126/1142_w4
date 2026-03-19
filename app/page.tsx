import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-gray-100 h-screen width-full flex justify-center items-center">

        <div className="bg-white p-6 rounded-lg flex justify-center items-center flex-col inline-block">
          <Image src="/next.svg" alt="avatar" width={100} height={100} />
          <div>寧</div>
          <div>Hello World</div>
          <div>興趣：哈哈哈</div>
          <div>資管二</div>
          <div>育有0個子女</div>
          <div>配偶：無</div>
          <div>拿過兩張駕照</div>

        </div>
      </div>

    </>

  );
}
