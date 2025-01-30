// import mor from '../../../public/asset/Mori-logo.png';
// import ego from '../../../public/asset/EGG-logo.png';
// import fer from '../../../public/asset/Fenwick-logo.png';
// import hellas from '../../../public/asset/Heals-logo.png';
// import jig from '../../../public/asset/Jigsaw-logo.png';
// import ik from '../../../public/asset/l-k-bennett-logo.png';
// import any from '../../../public/asset/Anya-Hindmarch.png';
// import oka from '../../../public/asset/OKA-logo.png';
// import tro from '../../../public/asset/Tropic-logo.png';
import mor from '../../../public/asset/Mori-logo.png';
import ego from '../../../public/asset/EGO-logo.png';
import fer from '../../../public/asset/Fenwick-logo.png';
import hellas from '../../../public/asset/Heals-logo.png';
import jig from '../../../public/asset/Jigsaw-logo.png';
import ik from '../../../public/asset/l-k-bennett-logo.png';
import any from '../../../public/asset/Anya-Hindmarch.png';
import oka from '../../../public/asset/OKA-logo.png';
import tro from '../../../public/asset/Tropic-logo.png';

const SectionImage = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 py-8 max-w-8xl p-8'>
            <div>
            <img src={any} alt="" />
            </div>
            <div>
            <img src={ego} alt="" />
            </div>
            <div>
            <img src={fer} alt="" />
            </div>
            <div>
            <img src={hellas} alt="" />
            </div>
            <div>
            <img src={jig} alt="" />
            </div>
            <div>
            <img src={ik} alt="" />
            </div>
            <div>
            <img src={mor} alt="" />
            </div>
            <div>
            <img src={oka} alt="" />
            </div>
            <div>
            <img src={tro} alt="" />
            </div>
        </div>
    );
};

export default SectionImage;