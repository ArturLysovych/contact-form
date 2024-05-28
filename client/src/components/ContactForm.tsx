import attach_icon from '../../src/assets/images/attach.svg';
import arrow_icon from '../../src/assets/images/arrow.svg';
import { useState } from 'react';
import { convertInfoToMail, postRequest } from '../utils';

export default function ContactForm() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [projectInfo, setProjectInfo] = useState('');
    
    const sendMessage = ():void => {
        const mailData = convertInfoToMail({ userName, email, projectInfo });
        postRequest(mailData);
    };

    return (
        <>
            <div className="flex flex-col gap-[45px] mt-[45px]">
                <div className="flex flex-col gap-[17px]">
                    <input
                        className="h-[30px] w-full outline-none border-none text-[20px] text-config_dark"
                        placeholder="What’s your name?"
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <div className="w-full h-[2px] bg-config_gray"></div>
                </div>
                <div className="flex flex-col gap-[17px]">
                    <input
                        className="h-[30px] w-full outline-none border-none text-[20px] text-config_dark"
                        placeholder="Your email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="w-full h-[2px] bg-config_gray"></div>
                </div>
                <div className="flex flex-col gap-[17px]">
                    <textarea
                        className="h-[30px] w-full outline-none border-none text-[20px] text-config_dark"
                        placeholder="Tell me about your project"
                        value={projectInfo}
                        onChange={(e) => setProjectInfo(e.target.value)}
                    ></textarea>
                    <div className="w-full h-[2px] bg-config_gray"></div>
                </div>
            </div>
            <div className="flex justify-between mt-[30px]">
                <button
                    className="w-[200px] h-[60px] rounded-[100px] bg-config_purple text-white text-[18px]"
                    onClick={sendMessage}
                >Get a Qoute</button>
                <div className="flex gap-[17px]">
                    <img className='cursor-pointer' height={17} width={17} src={attach_icon} alt="attach icon" />
                    <img className='cursor-pointer' height={17} width={17} src={arrow_icon} alt="arrow icon" />
                </div>
            </div>
        </>
    )
}
