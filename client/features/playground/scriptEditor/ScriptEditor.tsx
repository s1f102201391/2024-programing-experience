import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import type { BLOCK, Block } from '../types';
import styles from './ScriptEditor.module.css';
import { ScriptEditSpace } from './scriptEditSpace/ScriptEditSpace';
import { ScriptPalette } from './scriptPalette/ScriptPalette';

type Props = {
  scripts: Block[][];
  setScripts: Dispatch<SetStateAction<Block[][]>>;
};
export const ScriptEditor = (props: Props) => {
  const [targetBlock, setTargetBlock] = useState<BLOCK | null>(null);
  const { scripts, setScripts } = props;
  return (
    <div className={styles.main}>
      <ScriptPalette setTargetBlock={setTargetBlock} />
      <ScriptEditSpace scripts={scripts} setScripts={setScripts} targetBlock={targetBlock} />
    </div>
  );
};