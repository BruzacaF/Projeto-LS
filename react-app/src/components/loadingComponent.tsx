import '@/components/css/loading.css';

export default function Loading() {


    return (
        <div className="loading">
            <div className="loading__spinner">
                <div className="loading__spinner__circle"></div>
                <div className="loading__spinner__circle"></div>
                <div className="loading__spinner__circle"></div>
            </div>
        </div>
    );
}

