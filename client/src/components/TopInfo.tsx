export default function TopInfo() {
  return (
    <>
        <div className="flex flex-col justify-between items-start gap-[10px]">
            <p className="text-18px text-config_purple">Contact Me</p>
            <div className="w-[50px] h-[2px] bg-config_purple"></div>
        </div>
        <div className="flex justify-between items-start mt-[20px] gap-[20px]">
            <h2 className="w-[512px] text-[20px] sm:text-[30px] md:text-[36px] text-config_black font-medium">Let me know if you want to talk about a potential collaboration.I'm available for freelance work.</h2>
            <p className="text-[16px] sm:text-[20px] md:text-[24px] text-config_purple underline">infoname@mail.com</p>
        </div>
    </>
  )
}
