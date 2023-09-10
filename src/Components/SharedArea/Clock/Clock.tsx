import { Component } from "react";
import notification from "../../../Utils/Notification";
import "./Clock.css";

interface ClockProps {
    format: "24h" | "12h";
}

interface ClockState {
    time: string;
}

class Clock extends Component<ClockProps, ClockState> {

    private timerId: number;

    // Pass props to parent and init the state:
    public constructor(props: ClockProps) {
        super(props);
        this.state = {
            time: this.formattedDate()
        };
    }

    private formattedDate = () => {
        const now = new Date();
        const hour12 = this.props.format === "12h";
        return now.toLocaleTimeString("en", { hour12 });

    }

    componentDidMount(): void {
        this.timerId = window.setInterval(() => {
            const time = this.formattedDate();

            this.setState({
                time
            })
        }, 1000)
    }

    componentWillUnmount(): void {
        window.clearInterval(this.timerId);
    }

    private msg = "Good Day! ";

    private showTime = () => { // Arrow function, so "this" will be the class object
        notification.success(this.msg + this.formattedDate());
    }

    public render(): JSX.Element {
        return (
            <div className="Clock">
                <span>{this.state.time}</span>
                <button onClick={this.showTime}>Show Time</button>
            </div>
        );
    }
}

export default Clock;
