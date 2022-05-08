import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface ICatsPaginationHandlersProps {
    displayPrev10Cats: () => void;
    displayNext10Cats: () => void;
}

export const CatsPaginationHandlers = ({ displayNext10Cats, displayPrev10Cats }: ICatsPaginationHandlersProps) => (
    <Row className='mb-4'>
        <Col>
            <Button
                onClick={displayPrev10Cats}
                style={{ marginRight: 10 }}
            >
                Prev 10 Cats
            </Button>
            <Button onClick={displayNext10Cats}>Next 10 Cats</Button>
        </Col>
    </Row>
)
