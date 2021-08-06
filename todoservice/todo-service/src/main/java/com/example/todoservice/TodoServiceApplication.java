package com.example.todoservice;

import com.example.todoservice.model.Todo;
import com.example.todoservice.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TodoServiceApplication implements CommandLineRunner {
	private TodoRepository todoRepository;

	@Autowired
	public TodoServiceApplication(TodoRepository todoRepository) {

		this.todoRepository = todoRepository;
	}

	public static void main(String[] args) {
		SpringApplication.run(TodoServiceApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		todoRepository.save(new Todo("John","Doe","john@email.com"));
		todoRepository.save(new Todo("Mary","Public","mary@email.com"));
	}
}
