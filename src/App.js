import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Router.css';/** */

import List from './components/List';
import InputWithLabel from './components/InputWithLabel';
import MyButton from './components/MyButton';
import ListDemo from './components/ListDemo';
import PageComponent from './components/PageComponent';
import Table from './components/Table';
import JsxProperty from './components/JsxProperty';
import GrayBorder from './components/GrayBorder';
import RenderWithCondition from './components/RenderWithCondition';
import EventDemo, { ParentEvent } from './components/interaction/EventDemo';
import ToDoListEventDemo from './components/interaction/ToDoListEventDemo';
import Counter from './components/stateful/Counter';
import CounterTwo from './components/stateful/CounterTwo';
import ReRenderIssue from './components/stateful/ReRenderIssue';
import TodoCloneIssue from './components/stateful/TodoCloneIssue';
import InputDemo from './components/stateful/InputDemo';
import Tab from './components/stateful/Tab';
import DeclarativeUi from './components/stateful/DeclarativeUi';
import Declarative from './components/stateful/DeclarativeUI2';
import DeclarativeUI2 from './components/stateful/DeclarativeUI2';
import Tab2 from './components/stateful/Tab2';
import SingupForm from './components/formik/SingupForm';
import SignupFormWithValidation from './components/formik/SingupFormWithValidation';
import ContextDemo from './components/context/ContextDemo';
import ReducerCounter from './components/reducer/ReducerCounter';
import CustomReducer from './components/reducer/CustomReducer';
import ToDoWithReducer from './components/reducer/ToDoWithReducer';
import TodoListWithContext from './components/context/reducerwithcontext/TodoListWithContext';
import RefCounter from './components/hook/RefCounter';
import StopWatch from './components/hook/StopWatch';
import FocusDemo from './components/hook/FocusDemo';
import CustomInput from './components/hook/CustomInput';
import RefCounterProblem from './components/hook/RefCounterProblem';
import EffectDemo from './components/effect/EffectDemo';
import ChatRoom from './components/effect/ChatRoom';
import TodoListWithContextEffectFetching from './components/effect/TodoListWithContextEffectFetching';
import CustomFormik from './components/formik/CustomFormik';
import CallBackDemo from './components/hook/CallBackDemo';
import DeferredDemo from './components/hook/DeferredDemo';
import SuspenseDemo from './components/hook/SuspenseDemo';
import IdDemo from './components/hook/IdDemo';
import ImperativeHandleDemo from './components/hook/ImperativeHandleDemo';
import InsertionEffectDemo from './components/hook/InsertionEffectDemo';
import LayoutEffectDemo from './components/hook/LayoutEffectDemo';
import MemoDemo from './components/hook/MemoDemo';
import ExternalStorage from './components/hook/ExternalStorage';
import TransitionDemo from './components/hook/TransitionDemo';
import HeavyList from './components/list/HeavyList';
import InfiniteScrollDemo from './components/list/InfiniteScrollDemo';
import MyModal from './components/portal/MyModal';
import MyModalDemo from './components/portal/MyModalDemo';
import FlushSync from './components/stateful/FlushSync';
import ClassBasedHelloWorld from './components/classBased/ClassBasedHelloWorld';
import ClassCounter from './components/classBased/ClassCounter';
import LifeCycleDemo from './components/classBased/LifeCycleDemo';
import LifeCycleWrapper from './components/classBased/LifeCycleWrapper';
import LifeCycleTwo from './components/classBased/LifeCycleTwo';
import BugComponent from './components/classBased/BugComponent';
import ErrorBoundary from './components/classBased/ErrorBoundary';
import Greeting from './components/classBased/Greeting';
import FunGreeting from './components/FuncGreeting';
import JsxChild from './components/JsxChild';
import RepeatDemo from './RepeatDemo';
import DatePicker from './components/thirdParty/DatePicker';
// import Border from './components/pattern/Border';
import HocDemo from './components/pattern/hoc/HocDemo';
import TodoWithFetchUrl from './components/pattern/hoc/TodoWithFetchUrl';
import MouseTracker, { Cat } from './components/pattern/render-property/MouseTracker';

function App() {

    // <---Tab-->
    let header = ['tab1', 'tab2', 'tab3'];
  return(
    <div className='App'>
      {/* <h1>My React Project</h1> */}

      {/* <InputWithLabel onInputChange={handleSearch}
                      value={searchTerm}
                      id='search'
                      type='text'
                      label='search'
                      isFocused={true}>
            <strong>strong search</strong>                
      </InputWithLabel>
      <List list={searchStories}/> */}
      {/* <MyButton click={handleClick} count={count}/>
      <MyButton click={handleClick} count={count}/> */}
      {/* <ListDemo/> */}
      {/* <PageComponent/> */}
      {/* <Table/> */}
      {/* <JsxProperty/> */}
      {/* <GrayBorder>
        <h1>gray</h1>
        <h3>something</h3>
      </GrayBorder> */}
      {/* <RenderWithCondition flag={true}/> */}
      {/* <ParentEvent/> */}
      {/* <ToDoListEventDemo/> */}
      {/* <Counter/> */}
      {/* <CounterTwo/> */}
      {/* <ReRenderIssue/> */}
      {/* <TodoCloneIssue/> */}
      {/* <InputDemo/> */}
      {/* <Tab headers={header}>
        <div>header one section</div>
        <InputDemo/>
        <h3>header two section</h3>
      </Tab> */}
      {/* <DeclarativeUi/> */}
      {/* <DeclarativeUI2/> */}
      {/* <Tab2>
        <h1>Child 1</h1>
        <h1>Child 2</h1>
        <h1>Child 3</h1>
      </Tab2> */}
      {/* <SingupForm/> */}
      {/* <SignupFormWithValidation/> */}
      {/* <ContextDemo/> */}
      {/* <ReducerCounter/> */}
      {/* <CustomReducer/> */}
      {/* <ToDoWithReducer/> */}
      {/* <TodoListWithContext/> */}
      {/* <RefCounter/> */}
      {/* <StopWatch/> */}
      {/* <FocusDemo/> */}
      {/* <CustomInput/> */}
      {/* <RefCounterProblem/> */}
      {/* <EffectDemo/> */}
      {/* <ChatRoom/> */}
      {/* <TodoListWithContextEffectFetching/> */}
      {/* <CustomFormik/> */}
      {/* <CallBackDemo/> */}
      {/* <SuspenseDemo/> */}
      {/* <DeferredDemo/> */}
      {/* <IdDemo/> */}
      {/* <ImperativeHandleDemo/> */}
      {/* <InsertionEffectDemo/> */}
      {/* <LayoutEffectDemo/> */}
      {/* <MemoDemo/> */}
      {/* <ExternalStorage/> */}
      {/* <TransitionDemo/> */}
      {/* <HeavyList/> */}
      {/* <InfiniteScrollDemo/> */}
      {/* <MyModal open={true}/> */}
      {/* <MyModalDemo/> */}
      {/* <FlushSync/> */}
      {/* <ClassBasedHelloWorld  message={'this is props message'}>
        <p>this is children P tag</p>
      </ClassBasedHelloWorld> */}
      {/* <ClassCounter/> */}
      {/* <LifeCycleDemo initial={5}/> */}
      {/* <LifeCycleWrapper/> */}
      {/* <LifeCycleTwo/> */}
      {/* <ErrorBoundary>
        <BugComponent/>
      </ErrorBoundary> */}
      {/* <Greeting/> */}
      {/* <FunGreeting message={'hello'}/> */}
      {/* <JsxChild>
        {'hello' + (1+2)}
      </JsxChild> */}
      {/* <RepeatDemo/> */}
      {/* <Border>
      <DatePicker/>
      </Border> */}
      {/* <HocDemo/> */}
      {/* <TodoWithFetchUrl/> */}

      {/* <MouseTracker render={(position) => {
        return <Cat mouse={position}/>
      }}/> */}

      <MouseTracker render={(position) => {     //can name anything beside render
        return(
          <div>
              Position is {position.x},{position.y}
          </div>
        );
      }}/>
      
    </div>
  );
}

export default App;
