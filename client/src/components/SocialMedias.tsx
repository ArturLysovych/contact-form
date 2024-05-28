import instagram_icon from '../../src/assets/images/instagram.svg';

export default function SocialMedias() {
  return (
    <div className="flex flex-col items-center mt-[100px] gap-[30px]">
        <h2 className='text-config_black text-[36px] font-medium'>Let’s be Friends</h2>
        <div className="flex gap-[40px]">
            <img className='cursor-pointer' src={instagram_icon} alt="social media icon" />
            <img className='cursor-pointer' src={instagram_icon} alt="social media icon" />
            <img className='cursor-pointer' src={instagram_icon} alt="social media icon" />
        </div>
    </div>
  )
}
