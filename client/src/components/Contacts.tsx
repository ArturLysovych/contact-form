import Container from "../templates/Container";
import SocialMedias from '../components/SocialMedias';
import ContactForm from '../components/ContactForm';
import TopInfo from '../components/TopInfo';

export default function Contacts() {
  return (
    <Container>
        <TopInfo />
        <ContactForm />
        <SocialMedias />
    </Container>
  )
}
