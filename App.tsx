/** Bài tập buổi 1 - giao diện bố cục các View trong React Native. */

import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

type TileProps = {
  label: string;
  color: string;
  darkText?: boolean;
};

function Tile({label, color, darkText = false}: TileProps) {
  return (
    <View style={[styles.tile, {backgroundColor: color}]}>
      <Text style={[styles.tileLabel, darkText && styles.darkTileLabel]}>
        {label}
      </Text>
    </View>
  );
}

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
        <View style={styles.content}>
          <View style={[styles.row, styles.firstRow]}>
            <View style={styles.halfTile}>
              <Tile label="1" color="#087DF5" />
            </View>
            <View style={styles.halfTile}>
              <Tile label="2" color="#FF3232" />
            </View>
          </View>

          <View style={[styles.row, styles.secondRow]}>
            <View style={styles.smallTile}>
              <Tile label="3" color="#FFDE12" darkText />
            </View>
            <View style={styles.smallTile}>
              <Tile label="4" color="#18B45A" />
            </View>
            <View style={styles.wideTile}>
              <Tile label="5" color="#7837DA" />
            </View>
          </View>

          <View style={styles.lastRow}>
            <Tile label="6" color="#FF710B" />
          </View>

          <View style={styles.studentInfo}>
            <Text style={styles.studentText}>Đỗ Tuấn Anh - BIT240015</Text>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: '#FFFFFF'},
  content: {flex: 1, paddingHorizontal: 18, paddingTop: 20},
  row: {flexDirection: 'row', columnGap: 6, marginBottom: 6},
  firstRow: {height: 120},
  secondRow: {height: 112},
  halfTile: {flex: 1},
  smallTile: {flex: 1},
  wideTile: {flex: 2},
  lastRow: {height: 100},
  tile: {flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 2},
  tileLabel: {color: '#FFFFFF', fontSize: 36, fontWeight: '700', lineHeight: 44},
  darkTileLabel: {color: '#000000'},
  studentInfo: {flex: 1, alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 86},
  studentText: {color: '#3F3F3F', fontSize: 13, fontWeight: '600'},
});

export default App;
