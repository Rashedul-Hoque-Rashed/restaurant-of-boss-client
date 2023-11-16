import bg_img from "../../../assets/home/chef-service.jpg"

const Boss = () => {
    return (
        <div style={{ backgroundImage: `url(${bg_img})` }} className="mx-auto max-w-[1280px] py-[119px] px-[112px] rounded-sm bg-fixed">
            <div className="bg-white py-24 px-40 text-center">
                <h4 className="text-5xl font-normal text-[#151515] font-cinzel mb-2">Bistro Boss</h4>
                <p className="text-base font-normal text-[#151515] leading-6 font-inter">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default Boss;