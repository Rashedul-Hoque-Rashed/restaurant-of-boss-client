import { useQuery } from '@tanstack/react-query';
import useAxios from './../../../Hooks/useAxios';
import Auth from './../../../Hooks/Auth';
import { IoWallet } from "react-icons/io5";
import { FaUsers } from 'react-icons/fa';
import { SiCodechef } from "react-icons/si";
import { FaTruckFast } from "react-icons/fa6";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend, PieChart, Pie, Tooltip } from 'recharts';
import PropTypes from 'prop-types';


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminHome = () => {

    const { user } = Auth();
    const axios = useAxios();

    const { data: state = {} } = useQuery({
        queryKey: ['admin-state'],
        queryFn: async () => {
            const res = await axios.get('/admin-state')
            return res.data
        }
    })

    const { data: chartData = [] } = useQuery({
        queryKey: ['order-state'],
        queryFn: async () => {
            const res = await axios.get('/order-state')
            return res.data
        }
    })


    // bar chart custom shape
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };

    // pie chart custom shape
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    const pieChartData = chartData.map(data => {
        return { name: data.category, value: data.revenue }
    })

    return (
        <div>
            <h2 className='text-4xl font-semibold font-cinzel mb-6'><span>Hi, Welcome</span> {
                user?.displayName ? user?.displayName : 'Back'
            }!</h2>
            <div className="flex gap-6 bg-none">

                <div className="flex items-center shadow w-[293px] h-[150px] justify-center gap-8 bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] text-white rounded-lg">
                    <div className="stat-figure text-secondary">
                        <IoWallet className='h-14 w-14 text-white' />
                    </div>
                    <div>
                        <div className="stat-value text-5xl font-extrabold font-inter text-white">{state.totalRevenue}</div>
                        <div className="stat-title text-2xl font-normal font-inter text-white">Revenue</div>
                    </div>
                </div>
                <div className="flex items-center shadow w-[293px] h-[150px] justify-center gap-8 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] text-white rounded-lg">
                    <div className="stat-figure text-secondary">
                        <FaUsers className='h-14 w-14 text-white' />
                    </div>
                    <div>
                        <div className="stat-value text-5xl font-extrabold font-inter text-white">{state.users}</div>
                        <div className="stat-title text-2xl font-normal font-inter text-white">Customers</div>
                    </div>
                </div>
                <div className="flex items-center shadow w-[293px] h-[150px] justify-center gap-8 bg-gradient-to-r from-[#FE4880] to-[#FECDE9] text-white rounded-lg">
                    <div className="stat-figure text-secondary">
                        <SiCodechef className='h-14 w-14 text-white' />
                    </div>
                    <div>
                        <div className="stat-value text-5xl font-extrabold font-inter text-white">{state.menuItems}</div>
                        <div className="stat-title text-2xl font-normal font-inter text-white">Products</div>
                    </div>
                </div>
                <div className="flex items-center shadow w-[293px] h-[150px] justify-center gap-8 bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] text-white rounded-lg">
                    <div className="stat-figure text-secondary">
                        <FaTruckFast className='h-14 w-14 text-white' />
                    </div>
                    <div>
                        <div className="stat-value text-5xl font-extrabold font-inter text-white">{state.orders}</div>
                        <div className="stat-title text-2xl font-normal font-inter text-white">Orders</div>
                    </div>
                </div>

            </div>
            <div className="flex items-center mt-16 justify-evenly">
                <div className="w1/2">
                    <BarChart
                        width={700}
                        height={500}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 5]} />
                            ))}
                        </Bar>
                        <Legend />
                    </BarChart>
                </div>
                <div className="w1/2">
                    <PieChart width={500} height={500}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={150}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend />
                        <Tooltip />
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

AdminHome.propTypes = {
fill: PropTypes.any,
x: PropTypes.any,
y: PropTypes.any,
width: PropTypes.any,
height: PropTypes.any,
}

export default AdminHome;