import React, { useState, createRef } from 'react'
import { Select, Radio, Slider, Input, Tag } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import { PlusOutlined } from '@ant-design/icons';
const { TextArea } = Input;

function AddTransaction() {

    const saleList = [];
    for (let i = 10; i < 36; i++) {
        saleList.push(<Select key={i.toString(36) + i}>{i.toString(36) + i}</Select>);
    }

    const paymentList = [];
    for (let i = 10; i < 36; i++) {
        paymentList.push(<Select key={i.toString(36) + i}>{i.toString(36) + i}</Select>);
    }

    const marks = {
        0: '-30%',
        50: '0%',
        100: '30%'
    };

    const [Tags, setTags] = useState<string[]>(['Tag 1', 'Tag 2', 'Tag 3']);
    const [InputVisible, setInputVisible] = useState<boolean>(false);
    const [InputValue, setInputValue] = useState<string>("");
    
      const handleClose = (removedTag: any) => {
        const tags = Tags.filter(tag => tag !== removedTag);
        setTags(tags);
      };
    
      const showInput = () => {
        setInputVisible(true);
        saveInputRef.current?.focus();
      };
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setInputValue(e.target.value);
      };
    
      const handleInputConfirm = () => {
        const inputValue = InputValue;
        let tags = Tags;
        if (inputValue && tags.indexOf(inputValue) === -1) {
          tags = [...tags, inputValue];
        }
        
        setTags(tags);
        setInputVisible(false);
        setInputValue("");
      };

      const onComplete = (e: any) => {
          e.target.style = '';
      }

      const saveInputRef = React.useRef<Input>(null);
    
      const forMap = (tag: string) => {
        const tagElem = (
          <Tag
            closable
            onClose={e => {
              e.preventDefault();
              handleClose(tag);
            }}
          >
            {tag}
          </Tag>
        );
        return (
          <span key={tag} style={{ display: 'inline-block' }}>
            {tagElem}
          </span>
        );
      };

      const tagChild = Tags.map(forMap);

    return (
        <div className="content">
            <div style={{height: '15%', padding: '15px', borderBottom: '2px solid #ebebeb', backgroundColor: 'white'}}>
                <div style={{height: '50%', borderBottom: '2px solid #ebebeb'}}></div>
                <div style={{height: '50%', paddingTop: '5%'}}>
                    <span style={{float: 'left', fontWeight: 'bold', color: 'red'}}>X</span>
                    <span>P2P 거래 글쓰기</span>
                    <span style={{float: 'right', fontWeight: 'bold'}}>✓</span>
                </div>
            </div>
            <div style={{height: '20%', borderBottom: '2px solid #ebebeb', backgroundColor: 'white'}}>
                <div style={{height: '50%', borderBottom: '2px solid #ebebeb', paddingTop: '2.5%'}}>
                    <span style={{float: 'left', padding: '10px 20px'}}>나의 자산</span>
                    <span style={{float: 'right', padding: '10px 20px', textAlign: 'right', fontWeight: 'bold', lineHeight: '17px'}}>
                        <span>10.1010101010 BTC</span>
                        <br />
                        <span style={{fontSize: '13px', color: 'gray'}}>505050505050505050505050 KRW</span>
                    </span>
                </div>
                <div className="addDiv" style={{height: '50%', paddingTop: '3.7%'}}>
                    <Select size={'large'} defaultValue="a1" style={{ width: '50%' }}>
                        {saleList}
                    </Select>
                    <Radio.Group defaultValue="buy" size="large">
                        <Radio.Button value="buy">팝니다</Radio.Button>
                        <Radio.Button value="sell">삽니다</Radio.Button>
                    </Radio.Group>
                </div>
            </div>
            <div className="addDiv" style={{height: '60%', backgroundColor: 'white', textAlign: 'left', borderBottom: '2px solid #ebebeb', padding: '15px'}}>
                <div style={{marginBottom: '20px'}}>
                    <span>수량</span>
                    <Input suffix="BTC" />
                </div>
                
                <div style={{marginBottom: '40px'}}>
                    <span>현재가 대비</span>
                    <Input suffix="%" />
                    <Slider tipFormatter={null} marks={marks} included={false} defaultValue={50} />
                </div>
                
                <div style={{marginBottom: '20px'}}>
                    <span>결제 수단</span>
                    <Select size={'large'} defaultValue="a1" style={{ width: '100%' }}>
                        {paymentList}
                    </Select>
                </div>
                
                <div style={{marginBottom: '20px'}}>
                    <span>통장 사본</span>
                    <div></div>
                </div>

                <div className="addTagDiv">
                    <span>태그</span>
                    <br/>
                    <p>문구를 입력 후 엔터키를 누르시면 태그가 입력됩니다. (최대 5개)</p>
                    <div>
                        {InputVisible && (
                            <Input
                            ref={saveInputRef}
                            type="text"
                            size="small"
                            style={{ width: 78 }}
                            value={InputValue}
                            onChange={handleInputChange}
                            onBlur={handleInputConfirm}
                            onPressEnter={handleInputConfirm}
                            />
                        )}
                        {!InputVisible && (
                            <Tag onClick={showInput} className="site-tag-plus">
                            <PlusOutlined /> New Tag
                        </Tag>
                        )}
                        <div style={{ marginTop: 16, marginBottom: 16 }}>
                            <TweenOneGroup
                                enter={{
                                    scale: 0.8,
                                opacity: 0,
                                type: 'from',
                                duration: 100,
                                onComplete: onComplete
                            }}
                            leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                            appear={false}
                            >
                                {tagChild}
                            </TweenOneGroup>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{height: '25%', backgroundColor: '#fbfbfb'}}>
                <div style={{height: '38%', borderBottom: '2px solid #ebebeb', padding: '15px 15px 0'}}>
                    <div style={{height: '50%', textAlign: 'left'}}>
                        <span>거래 등록 수수료</span>
                        <span style={{float: 'right'}}>1% (0 BTC)</span>
                    </div>
                    <div style={{height: '50%', textAlign: 'left'}}>
                        <span>총 판매 수량</span>
                        <span style={{float: 'right'}}>0 BTC</span>
                    </div>
                </div>
                <div style={{height: '38%', borderBottom: '2px solid #ebebeb', padding: '15px 15px 0'}}>
                    <div style={{height: '50%', textAlign: 'left'}}>
                        <span>비트코인 현재가</span>
                        <span style={{float: 'right'}}>70,000,000 원</span>
                    </div>
                    <div style={{height: '50%', textAlign: 'left'}}>
                        <span>판매가격</span>
                        <span style={{float: 'right'}}>70,000,000 원 (0.0%)</span>
                    </div>
                </div>
                <div style={{height: '24%', borderBottom: '2px solid #ebebeb', padding: '15px 15px 0'}}>
                    <div style={{textAlign: 'left'}}>
                        <span>거래 성사시 받을 금액</span>
                        <span style={{float: 'right'}}>0 원</span>
                    </div>
                </div>
            </div>
            <div className="additionalInfoDiv">
            <TextArea
                placeholder="요청하실 거래 조건에 대해 작성해 주세요"
                autoSize={{ minRows: 10, maxRows: 50 }}
                allowClear
            />
            </div>
        </div>
    )
}

export default AddTransaction
