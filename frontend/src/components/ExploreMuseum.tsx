import { Link } from 'react-router-dom';
import patan from '../assets/museums/patanmuseum.jpg';
import bhaktapur from '../assets/museums/bhaktapurmuseum.jpg';
import kathmandu from '../assets/museums/kathmandumuseum.jpg';
import narayanhiti from '../assets/museums/narayanhitimuseum.jpg';
import MuseumCard from './MuseumCard';

const ExploreMuseum = () => {
    return (
        <div className="min-h-[60vh] w-full pt-20 items-center">
            <div className="flex gap-4 items-center justify-evenly flex-wrap my-6">
                <Link to={'/tour/patan'} >
                    <MuseumCard museumImg={patan} title='Patan Museum' description='Located at Patan, lalitpur' status='Currently Open' />
                </Link>
                <Link to={'/tour/bhaktapur'} >
                    <MuseumCard museumImg={bhaktapur} title='Bhaktapur Museum' description='Located at Durbar Square, Bhaktapur' status='Currently Open' />
                </Link>
                <Link to={'/tour/bhaktapur'} >
                    <MuseumCard museumImg={kathmandu} title='The National Museum' description='Located at Kathmandu' status='Currently Open' />
                </Link>
                <Link to={'/tour/bhaktapur'} >
                    <MuseumCard museumImg={narayanhiti} title='Narayanhiti Museum' description='Located at Narayanhiti, Kathmandu' status='Currently Open' />
                </Link>
            </div>
        </div>
    );
}

export default ExploreMuseum;
