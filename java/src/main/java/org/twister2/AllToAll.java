package org.twister2;

public class AllToAll {
  public native void WriteMessage();

  public static void main(String[] args) {
    NativeLoader.load();

    AllToAll all = new AllToAll();
    all.WriteMessage();
  }
}