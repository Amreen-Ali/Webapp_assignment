package com.example.teatime;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;

public class MainActivity extends AppCompatActivity {
    RecyclerView rcv;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        rcv = (RecyclerView) findViewById(R.id.recyclerview);
        rcv.setLayoutManager(new LinearLayoutManager(this));

//        String arr[]={"Kashmiri Kahwa","Doodh Patti","Green Tea","Black Coffee","Adrak Tea"};
//        rcv.setAdapter(new MyAdapter(arr));
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {

        getMenuInflater().inflate(R.menu.menu,menu);
        return super.onCreateOptionsMenu(menu);
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {

        int itemid=item.getItemId();
        if (itemid==R.id.item1){
         Intent intent = new Intent (this, Additem.class);
         startActivity(intent);
         return true;
        }
        return super.onOptionsItemSelected(item);
    }
}