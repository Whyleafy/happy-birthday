export function StepLetters({ step }) {
    switch (step) {
        case 1:
            return (
                <div className="paper">
                    <div className="letter">
                        <p>Моя дорогая, горячо любимая Василиса!</p>
                        <p>Поздравляю тебя с днем рождения, с твоим главным и долгожданным праздником! Пусть этот день будет хорошим, у тебя будет прекрасное настроение, ты почувствуешь себя на 19 лет, и осознаешь что мы теперь РОВЕСНИКИ!!!</p>
                        <p>Желаю тебе сил, радости, желания следовать своим целям и добиваться их! Я бескрайне верю в тебя и всегда горжусь</p>
                        <p style={{ textAlign: "right" }}>С любовью</p>
                        <p style={{ textAlign: "right" }}>Твой Владик</p>
                    </div>
                </div>
            );

        case 2:
            return (
                <div className="paper">
                    <div className="letter">
                        <p>с др</p>
                        <p>2</p>
                        <p>2</p>
                        <p style={{ textAlign: "right" }}>м</p>
                        <p style={{ textAlign: "right" }}></p>
                    </div>
                </div>
            );

        case 3:
            return (
                <div className="paper">
                    <div className="letter">
                        <p>с др</p>
                        <p>3</p>
                        <p>3</p>
                        <p style={{ textAlign: "right" }}>м</p>
                        <p style={{ textAlign: "right" }}></p>
                    </div>
                </div>
            );

        case 4:
            return (
                <div className="paper">
                    <div className="letter">
                        <p>с др</p>
                        <p>4</p>
                        <p>4</p>
                        <p style={{ textAlign: "right" }}>м</p>
                        <p style={{ textAlign: "right" }}></p>
                    </div>
                </div>
            );

        default:
            return null; // или какой-то стартовый экран
    }
}