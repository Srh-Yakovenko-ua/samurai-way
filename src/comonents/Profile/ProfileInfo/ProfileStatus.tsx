import React, {ChangeEvent, KeyboardEvent} from 'react';

interface ProfileStatusType {
    status: string
    updateProfileStatus: (newStatus: string) => void
}

interface ProfileStatusStateType {
    editMode: boolean
    newStatus: string
}

export class ProfileStatus extends React.Component<ProfileStatusType, ProfileStatusStateType> {
    state = {
        editMode: false,
        newStatus: this.props.status,
    }

    onChangeActiveEditeMode = () => this.setState({editMode: true})
    disableEditMode = () => {
        this.setState({editMode: false})
        this.props.updateProfileStatus(this.state.newStatus)
    }

    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({newStatus: e.currentTarget.value})
    }
    onKeyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            this.setState({editMode: false})
            this.props.updateProfileStatus(this.state.newStatus)
        }
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<ProfileStatusStateType>) {
        if (prevProps.status !== this.props.status) {
            this.setState({newStatus: this.props.status})
        }
    }


    render() {
        const {editMode, newStatus} = this.state;
        const {status} = this.props;

        return (
            <>
                {!editMode ?
                    <div>
                        <span onClick={this.onChangeActiveEditeMode}>
                            My Status : {status ? status : 'NOT STATUS'}
                        </span>
                    </div>
                    :
                    <div>
                        <input type="text"
                               value={newStatus}
                               onBlur={this.disableEditMode}
                               onChange={this.onChangeStatus}
                               onKeyUp={this.onKeyUpHandler}
                               placeholder="change status"
                               autoFocus
                        />
                    </div>}


            </>
        );
    }
}

