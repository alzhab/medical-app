import React, {Component} from 'react';
import {Flex} from '@atoms';
import {Header} from '@molecules';

class Stats extends Component {
  render() {
    return (
      <Flex full size={1}>
        <Header title={'Statistics'}/>
      </Flex>
    );
  }
}

export default Stats;
