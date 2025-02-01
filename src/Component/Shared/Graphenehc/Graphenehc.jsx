
import Merchandising from '../../Merchandising/Merchandising';
import Platform from '../../Sahred/Platform/Platform';
import Technology from '../../Sahred/Technology/Technology';
import Testimonials from '../../Sahred/Testimonials/Testimonials';
import Demo from '../Demo/Demo';
import Graph from '../Graph/Graph';

const Graphenehc = () => {
    return (
        <div className='bg-white'>
            <Graph></Graph>
            <Demo></Demo>
            <Merchandising></Merchandising>
            <Technology></Technology>
            <Testimonials></Testimonials>
            <Platform></Platform>

        </div>
    );
};

export default Graphenehc;