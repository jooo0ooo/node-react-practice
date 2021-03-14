import React, { useState, createRef } from 'react'
import { Select, Radio, Slider, Input, Tag } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import { PlusOutlined } from '@ant-design/icons';
import './AddTransaction.css';
import RadioOption from '../Common/RadioOption';
import Myasset from '../Common/Myasset';
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
            <div className="height15 p15 commonBorderBottom bgWhite">
                <div className="height50 commonBorderBottom"></div>
                <div className="height50 addTransactionTitle">
                    <span className="floatLeft">X</span>
                    <span>P2P 거래 글쓰기</span>
                    <span className="floatRight">✓</span>
                </div>
            </div>
            <div className="height20 commonBorderBottom bgWhite">
                <div className="myAssetDiv height50 commonBorderBottom">
                    <Myasset />
                </div>
                <div className="addDiv height50 addDivFirst">
                    <Select className="width50" size={'large'} defaultValue="a1">
                        {saleList}
                    </Select>
                    <RadioOption 
                        defaultValue="sell"
                        leftOptionValue="sell"
                        leftOptionText="팝니다"
                        rightOptionValue="buy"
                        rightOptionText="삽니다"
                    />
                </div>
            </div>
            <div className="addDiv addDivSecond height75 bgWhite commonBorderBottom p15">
                <div className="addDivOption">
                    <span>수량</span>
                    <Input suffix="BTC" />
                </div>
                
                <div className="addDivOption addDivOptionDiff">
                    <span>현재가 대비</span>
                    <Input suffix="%" />
                    <Slider tipFormatter={null} marks={marks} included={false} defaultValue={50} />
                </div>
                
                <div className="addDivOption">
                    <span>결제 수단</span>
                    <Select className="width100" size={'large'} defaultValue="a1">
                        {paymentList}
                    </Select>
                </div>
                
                <div className="addDivOption">
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

            <div className="height25 summaryCover">
                <div className="height38 commonBorderBottom summaryDiv">
                    <div className="height50 alignLeft">
                        <span>거래 등록 수수료</span>
                        <span className="floatRight">1% (0 BTC)</span>
                    </div>
                    <div className="height50 alignLeft">
                        <span>총 판매 수량</span>
                        <span className="floatRight">0 BTC</span>
                    </div>
                </div>
                <div className="height38 commonBorderBottom summaryDiv">
                    <div className="height50 alignLeft">
                        <span>비트코인 현재가</span>
                        <span className="floatRight">70,000,000 원</span>
                    </div>
                    <div className="height50 alignLeft">
                        <span>판매가격</span>
                        <span className="floatRight">70,000,000 원 (0.0%)</span>
                    </div>
                </div>
                <div className="height24 commonBorderBottom summaryDiv summaryDiv">
                    <div className="alignLeft">
                        <span>거래 성사시 받을 금액</span>
                        <span className="floatRight">0 원</span>
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
